'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/admin/sidebar';
import { ContactsTable } from '@/components/admin/contacts-table';

export default function ContactsPage() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar active="Contacts" />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Contacts</h1>

        <ContactsTable refreshTrigger={refreshTrigger} />
      </div>
    </div>
  );
}
