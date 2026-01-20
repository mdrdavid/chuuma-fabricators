'use client';

import React from "react"

import { useState } from 'react';
import { Project } from '@/lib/models';
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

interface ProjectFormProps {
  project?: Project;
  onSuccess: () => void;
}

export function ProjectForm({ project, onSuccess }: ProjectFormProps) {
  const [formData, setFormData] = useState<Partial<Project>>(
    project || {
      title: '',
      category: '',
      image: '',
      description: '',
      client: '',
      completionDate: '',
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
      const url = project?._id
        ? `/api/projects/${project._id}`
        : '/api/projects';
      const method = project?._id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save project');
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
        <CardTitle>{project ? 'Edit Project' : 'Add Project'}</CardTitle>
        <CardDescription>
          {project ? 'Update project details' : 'Create a new project'}
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

          <div>
            <label className="text-sm font-medium">Title</label>
            <Input
              value={formData.title || ''}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              disabled={loading}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
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
            <div>
              <label className="text-sm font-medium">Client Name</label>
              <Input
                value={formData.client || ''}
                onChange={(e) =>
                  setFormData({ ...formData, client: e.target.value })
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
              placeholder="/images/project-name.jpg"
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
              <label className="text-sm font-medium">Completion Date</label>
              <Input
                type="date"
                value={formData.completionDate || ''}
                onChange={(e) =>
                  setFormData({ ...formData, completionDate: e.target.value })
                }
                disabled={loading}
              />
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
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Saving...' : 'Save Project'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
