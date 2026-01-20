'use client';

import { useState, useEffect } from 'react';
import { Design } from '@/lib/models';
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

interface DesignsTableProps {
  onEdit: (design: Design) => void;
  refreshTrigger: number;
}

export function DesignsTable({ onEdit, refreshTrigger }: DesignsTableProps) {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDesigns();
  }, [refreshTrigger]);

  async function fetchDesigns() {
    try {
      const response = await fetch('/api/designs');
      const data = await response.json();
      setDesigns(data);
    } catch (error) {
      console.error('Failed to fetch designs:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure?')) return;

    try {
      await fetch(`/api/designs/${id}`, { method: 'DELETE' });
      fetchDesigns();
    } catch (error) {
      console.error('Failed to delete design:', error);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Pricing</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {designs.map((design) => (
            <TableRow key={design._id?.toString()}>
              <TableCell>
                {design.image && (
                  <Image
                    src={design.image || "/placeholder.svg"}
                    alt={design.name}
                    width={40}
                    height={40}
                    className="rounded"
                  />
                )}
              </TableCell>
              <TableCell>{design.name}</TableCell>
              <TableCell>{design.category}</TableCell>
              <TableCell>
                UGX {design.pricing.base}K - {design.pricing.max}K
              </TableCell>
              <TableCell className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onEdit(design)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(design._id?.toString() || '')}
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
