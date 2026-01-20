'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/admin/sidebar';
import { DesignsTable } from '@/components/admin/designs-table';
import { DesignForm } from '@/components/admin/design-form';
import { Button } from '@/components/ui/button';
import { Design } from '@/lib/models';
import { Plus } from 'lucide-react';

export default function DesignsPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<Design | undefined>();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  function handleEdit(design: Design) {
    setSelectedDesign(design);
    setShowForm(true);
  }

  function handleSuccess() {
    setShowForm(false);
    setSelectedDesign(undefined);
    setRefreshTrigger((prev) => prev + 1);
  }

  function handleNew() {
    setSelectedDesign(undefined);
    setShowForm(true);
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar active="Designs" />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Designs</h1>
          <Button onClick={handleNew} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Design
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showForm && (
            <div className="lg:col-span-1">
              <DesignForm
                design={selectedDesign}
                onSuccess={handleSuccess}
              />
            </div>
          )}

          <div className={showForm ? 'lg:col-span-2' : 'lg:col-span-3'}>
            <DesignsTable
              onEdit={handleEdit}
              refreshTrigger={refreshTrigger}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
