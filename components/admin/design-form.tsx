'use client';

import React from "react"

import { useState } from 'react';
import { Design } from '@/lib/models';
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

interface DesignFormProps {
  design?: Design;
  onSuccess: () => void;
}

export function DesignForm({ design, onSuccess }: DesignFormProps) {
  const [formData, setFormData] = useState<Partial<Design>>(
    design || {
      name: '',
      category: '',
      image: '',
      description: '',
      pricing: { base: 0, max: 0 },
      specifications: '',
      order: 0,
    }
  );
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const url = design?._id ? `/api/designs/${design._id}` : '/api/designs';
      const method = design?._id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save design');
      }

      onSuccess();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{design ? 'Edit Design' : 'Add Design'}</CardTitle>
        <CardDescription>
          {design ? 'Update design details' : 'Create a new design'}
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
            <label className="text-sm font-medium">Image URL</label>
            <Input
              value={formData.image || ''}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              disabled={loading}
              placeholder="/images/design-name.jpg"
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
              rows={3}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Specifications</label>
            <textarea
              value={formData.specifications || ''}
              onChange={(e) =>
                setFormData({ ...formData, specifications: e.target.value })
              }
              disabled={loading}
              className="w-full border rounded-md p-2 text-sm"
              rows={3}
            />
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
            {loading ? 'Saving...' : 'Save Design'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
