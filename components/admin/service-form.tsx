'use client';

import React from "react"

import { useState } from 'react';
import { Service } from '@/lib/models';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ServiceFormProps {
  service?: Service;
  onSuccess: () => void;
}

export function ServiceForm({ service, onSuccess }: ServiceFormProps) {
  const [formData, setFormData] = useState<Partial<Service>>(
    service || {
      name: '',
      description: '',
      shortDescription: '',
      icon: '',
      image: '',
      features: [],
      pricing: { base: 0, max: 0 },
      category: '',
      order: 0,
    }
  );
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [featureInput, setFeatureInput] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const url = service?._id
        ? `/api/services/${service._id}`
        : '/api/services';
      const method = service?._id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save service');
      }

      onSuccess();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  function addFeature() {
    if (featureInput.trim()) {
      setFormData({
        ...formData,
        features: [...(formData.features || []), featureInput],
      });
      setFeatureInput('');
    }
  }

  function removeFeature(index: number) {
    setFormData({
      ...formData,
      features: formData.features?.filter((_, i) => i !== index),
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{service ? 'Edit Service' : 'Add Service'}</CardTitle>
        <CardDescription>
          {service ? 'Update service details' : 'Create a new service'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input
                value={formData.name || ''}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                disabled={loading}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Category</label>
              <Input
                value={formData.category || ''}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Short Description</label>
            <Input
              value={formData.shortDescription || ''}
              onChange={(e) =>
                setFormData({ ...formData, shortDescription: e.target.value })
              }
              disabled={loading}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              disabled={loading}
              className="w-full border rounded-md p-2 text-sm"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Image URL</label>
              <Input
                value={formData.image || ''}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                disabled={loading}
                placeholder="/images/service-name.jpg"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Icon</label>
              <Input
                value={formData.icon || ''}
                onChange={(e) =>
                  setFormData({ ...formData, icon: e.target.value })
                }
                disabled={loading}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Base Price (UGX K)</label>
              <Input
                type="number"
                value={formData.pricing?.base || 0}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      base: Number(e.target.value),
                    },
                  })
                }
                disabled={loading}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Max Price (UGX K)</label>
              <Input
                type="number"
                value={formData.pricing?.max || 0}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      max: Number(e.target.value),
                    },
                  })
                }
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Features</label>
            <div className="flex gap-2 mb-2">
              <Input
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder="Add a feature"
                disabled={loading}
              />
              <Button
                type="button"
                onClick={addFeature}
                disabled={loading}
              >
                Add
              </Button>
            </div>
            <div className="space-y-1">
              {formData.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-slate-100 p-2 rounded"
                >
                  <span>{feature}</span>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => removeFeature(index)}
                  >
                    ✕
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Order</label>
            <Input
              type="number"
              value={formData.order || 0}
              onChange={(e) =>
                setFormData({ ...formData, order: Number(e.target.value) })
              }
              disabled={loading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Saving...' : 'Save Service'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
