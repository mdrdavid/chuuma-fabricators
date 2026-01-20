'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/admin/sidebar';
import { ServicesTable } from '@/components/admin/services-table';
import { ServiceForm } from '@/components/admin/service-form';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/models';
import { Plus } from 'lucide-react';

export default function ServicesPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | undefined>();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  function handleEdit(service: Service) {
    setSelectedService(service);
    setShowForm(true);
  }

  function handleSuccess() {
    setShowForm(false);
    setSelectedService(undefined);
    setRefreshTrigger((prev) => prev + 1);
  }

  function handleNew() {
    setSelectedService(undefined);
    setShowForm(true);
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar active="Services" />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Services</h1>
          <Button onClick={handleNew} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Service
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showForm && (
            <div className="lg:col-span-1">
              <ServiceForm
                service={selectedService}
                onSuccess={handleSuccess}
              />
            </div>
          )}

          <div className={showForm ? 'lg:col-span-2' : 'lg:col-span-3'}>
            <ServicesTable
              onEdit={handleEdit}
              refreshTrigger={refreshTrigger}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
