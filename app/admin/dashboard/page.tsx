'use client';

import { Sidebar } from '@/components/admin/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface Stats {
  services: number;
  designs: number;
  projects: number;
  contacts: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    services: 0,
    designs: 0,
    projects: 0,
    contacts: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [services, designs, projects, contacts] = await Promise.all([
          fetch('/api/services').then((r) => r.json()),
          fetch('/api/designs').then((r) => r.json()),
          fetch('/api/projects').then((r) => r.json()),
          fetch('/api/contacts').then((r) => r.json()),
        ]);

        setStats({
          services: services.length,
          designs: designs.length,
          projects: projects.length,
          contacts: contacts.length,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar active="Dashboard" />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.services}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Designs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.designs}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.projects}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">New Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.contacts}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
