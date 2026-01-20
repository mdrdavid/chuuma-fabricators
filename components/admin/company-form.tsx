'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { CompanyInfo } from '@/lib/models'
import { Upload, X } from 'lucide-react'

export default function CompanyForm() {
  const [data, setData] = useState<CompanyInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    async function fetchCompanyInfo() {
      try {
        const response = await fetch('/api/company')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Failed to fetch company info:', error)
        toast({ title: 'Error', description: 'Failed to load company info', variant: 'destructive' })
      } finally {
        setLoading(false)
      }
    }

    fetchCompanyInfo()
  }, [toast])

  const handleInputChange = (field: string, value: unknown) => {
    setData((prev) => {
      if (!prev) return null
      return {
        ...prev,
        [field]: value,
      }
    })
  }

  const handleArrayChange = (field: string, index: number, value: string) => {
    setData((prev) => {
      if (!prev) return null
      const array = (prev[field as keyof CompanyInfo] as unknown as string[]) || []
      const newArray = [...array]
      newArray[index] = value
      return {
        ...prev,
        [field]: newArray,
      }
    })
  }

  const handleFeatureChange = (index: number, field: string, value: string) => {
    setData((prev) => {
      if (!prev) return null
      const features = [...prev.features]
      features[index] = { ...features[index], [field]: value }
      return { ...prev, features }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!data) return

    setSubmitting(true)
    try {
      const response = await fetch('/api/company', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to update company info')
      }

      toast({ title: 'Success', description: 'Company information updated successfully' })
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save company info', variant: 'destructive' })
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading company information...</div>
  }

  if (!data) {
    return <div className="text-center py-8">No company information found</div>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Company Name</label>
          <Input
            value={data.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            placeholder="Company name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Tagline</label>
          <Input
            value={data.tagline}
            onChange={(e) => handleInputChange('tagline', e.target.value)}
            placeholder="Short tagline"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Main Description</label>
        <Textarea
          value={data.mainDescription}
          onChange={(e) => handleInputChange('mainDescription', e.target.value)}
          placeholder="Main company description"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Story Title</label>
        <Input
          value={data.storyTitle}
          onChange={(e) => handleInputChange('storyTitle', e.target.value)}
          placeholder="Story title"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Story Content (one paragraph per line)</label>
        <Textarea
          value={data.storyContent.join('\n')}
          onChange={(e) => handleInputChange('storyContent', e.target.value.split('\n'))}
          placeholder="Enter story paragraphs, one per line"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Mission</label>
        <Textarea
          value={data.mission}
          onChange={(e) => handleInputChange('mission', e.target.value)}
          placeholder="Company mission"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Vision</label>
        <Textarea
          value={data.vision}
          onChange={(e) => handleInputChange('vision', e.target.value)}
          placeholder="Company vision"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Values</label>
        <Textarea
          value={data.values}
          onChange={(e) => handleInputChange('values', e.target.value)}
          placeholder="Company values"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-4">Why Choose Us Features</label>
        {data.features.map((feature, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg">
            <div className="grid md:grid-cols-3 gap-4">
              <Input
                value={feature.title}
                onChange={(e) => handleFeatureChange(index, 'title', e.target.value)}
                placeholder="Feature title"
              />
              <Input
                value={feature.icon}
                onChange={(e) => handleFeatureChange(index, 'icon', e.target.value)}
                placeholder="Icon name (Hammer, Award, MapPin, Users)"
              />
              <Textarea
                value={feature.description}
                onChange={(e) => handleFeatureChange(index, 'description', e.target.value)}
                placeholder="Feature description"
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Workshop Description</label>
        <Input
          value={data.workshopDescription}
          onChange={(e) => handleInputChange('workshopDescription', e.target.value)}
          placeholder="Workshop description"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Location</label>
        <Input
          value={data.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          placeholder="Workshop location"
        />
      </div>

      <Button type="submit" className="bg-industrial-orange hover:bg-industrial-orange-dark text-white" disabled={submitting}>
        {submitting ? 'Saving...' : 'Save Company Information'}
      </Button>
    </form>
  )
}
