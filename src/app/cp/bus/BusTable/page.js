'use client'
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function BusTable({ buses, loading }) {
  return (
    <div className="card" dir="rtl">
      <DataTable 
        value={buses} 
        loading={loading}
        // paginator 
        rows={5}
        rowsPerPageOptions={[5, 10, 20]}
        tableStyle={{ minWidth: '50rem' }}
        emptyMessage="لا توجد حافلات متاحة"
        showGridlines
        stripedRows
      >
        <Column 
          field="id" 
          header="الرقم" 
          sortable 
          style={{ textAlign: 'right' }}
          headerStyle={{ textAlign: 'right' }}
        />
        <Column 
          field="name" 
          header="اسم الحافلة" 
          sortable 
          style={{ textAlign: 'right' }}
          headerStyle={{ textAlign: 'right' }}
        />
        <Column 
          field="count" 
          header="عدد المقاعد" 
          sortable 
          style={{ textAlign: 'right' }}
          headerStyle={{ textAlign: 'right' }}
        />
      </DataTable>
    </div>
  );
}