'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/admin/sidebar';
import { ProjectsTable } from '@/components/admin/projects-table';
import { ProjectForm } from '@/components/admin/project-form';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/models';
import { Plus } from 'lucide-react';

export default function ProjectsPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  function handleEdit(project: Project) {
    setSelectedProject(project);
    setShowForm(true);
  }

  function handleSuccess() {
    setShowForm(false);
    setSelectedProject(undefined);
    setRefreshTrigger((prev) => prev + 1);
  }

  function handleNew() {
    setSelectedProject(undefined);
    setShowForm(true);
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar active="Projects" />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Projects</h1>
          <Button onClick={handleNew} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Project
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showForm && (
            <div className="lg:col-span-1">
              <ProjectForm
                project={selectedProject}
                onSuccess={handleSuccess}
              />
            </div>
          )}

          <div className={showForm ? 'lg:col-span-2' : 'lg:col-span-3'}>
            <ProjectsTable
              onEdit={handleEdit}
              refreshTrigger={refreshTrigger}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
