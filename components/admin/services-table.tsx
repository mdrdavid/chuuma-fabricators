'use client';

import { useState, useEffect } from 'react';
import { Service } from '@/lib/models';
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

interface ServicesTableProps {
  onEdit: (service: Service) => void;
  refreshTrigger: number;
}

export function ServicesTable({ onEdit, refreshTrigger }: ServicesTableProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, [refreshTrigger]);

  async function fetchServices() {
    try {
      const response = await fetch('/api/services');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure?')) return;

    try {
      await fetch(`/api/services/${id}`, { method: 'DELETE' });
      fetchServices();
    } catch (error) {
      console.error('Failed to delete service:', error);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Icon</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Pricing</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service._id?.toString()}>
              <TableCell>
                {service.image && (
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={40}
                    height={40}
                    className="rounded"
                  />
                )}
              </TableCell>
              <TableCell>{service.name}</TableCell>
              <TableCell>{service.category}</TableCell>
              <TableCell>
                UGX {service.pricing.base}K - {service.pricing.max}K
              </TableCell>
              <TableCell className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onEdit(service)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(service._id?.toString() || '')}
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
