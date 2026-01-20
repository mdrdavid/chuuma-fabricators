'use client';

import { Sidebar } from '@/components/admin/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar active="Settings" />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Your API endpoints are configured and ready to use.
                </AlertDescription>
              </Alert>

              <div>
                <p className="text-sm font-medium mb-2">Available Endpoints:</p>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• GET /api/services</li>
                  <li>• POST /api/services</li>
                  <li>• GET /api/designs</li>
                  <li>• POST /api/designs</li>
                  <li>• GET /api/projects</li>
                  <li>• POST /api/projects</li>
                  <li>• GET /api/contacts</li>
                  <li>• POST /api/contacts</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CMS Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-slate-600">System Version</p>
                <p className="font-medium">1.0.0</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Database</p>
                <p className="font-medium">MongoDB</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Status</p>
                <p className="font-medium text-green-600">Connected</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
