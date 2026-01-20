'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/lib/models';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';

interface ProjectsTableProps {
  onEdit: (project: Project) => void;
  refreshTrigger: number;
}

export function ProjectsTable({ onEdit, refreshTrigger }: ProjectsTableProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, [refreshTrigger]);

  async function fetchProjects() {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure?')) return;

    try {
      await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      fetchProjects();
    } catch (error) {
      console.error('Failed to delete project:', error);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project._id?.toString()}>
              <TableCell>
                {project.image && (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={40}
                    height={40}
                    className="rounded"
                  />
                )}
              </TableCell>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.category}</TableCell>
              <TableCell>{project.client || 'N/A'}</TableCell>
              <TableCell className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onEdit(project)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(project._id?.toString() || '')}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
