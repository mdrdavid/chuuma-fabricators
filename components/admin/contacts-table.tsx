'use client';

import { useState, useEffect } from 'react';
import { Contact } from '@/lib/models';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Mail, Trash2 } from 'lucide-react';

interface ContactsTableProps {
  refreshTrigger: number;
}

export function ContactsTable({ refreshTrigger }: ContactsTableProps) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, [refreshTrigger]);

  async function fetchContacts() {
    try {
      const response = await fetch('/api/contacts');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure?')) return;

    try {
      await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
      fetchContacts();
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact._id?.toString()}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.service || 'General'}</TableCell>
              <TableCell>
                {new Date(contact.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="flex gap-2">
                <a href={`mailto:${contact.email}`}>
                  <Button size="sm" variant="outline">
                    <Mail className="w-4 h-4" />
                  </Button>
                </a>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(contact._id?.toString() || '')}
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
