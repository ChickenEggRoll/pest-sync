import React, { useState } from 'react';
import { PhoneIcon, MapPinIcon, PencilIcon } from '@heroicons/react/24/outline';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Add this interface
interface CustomerData {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
  nextService: string;
  lastService: string;
  serviceType: string;
  accountStatus: 'active' | 'pending' | 'inactive';
}

// Add this mock data
const customerData: CustomerData = {
  name: "John & Jane Smith",
  address: {
    street: "8625 Chaparral Way",
    city: "Santee",
    state: "CA",
    zip: "92071"
  },
  coordinates: {
    lat: 32.85001,
    lng: -116.99744
  },
  phone: "(555) 123-4567",
  email: "john.smith@email.com",
  nextService: "2024-03-15",
  lastService: "2024-02-15",
  serviceType: "Quarterly",
  accountStatus: "active"
};

// Add map container style
const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem'
};

// Add custom marker icon configuration
const customMarkerIcon = {
  url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', // We can replace this with a custom icon
  scaledSize: {
    width: 32,
    height: 32
  },
  // Optional: anchor point for the icon
  anchor: {
    x: 16,
    y: 32
  }
};

// Add this interface for notes
interface Note {
  id: number;
  text: string;
  timestamp: string;
  author: string;
}

const LiveConnect: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      text: "Customer prefers afternoon appointments",
      timestamp: "2024-03-10 14:30",
      author: "John D."
    },
    {
      id: 2,
      text: "Gate code: #1234",
      timestamp: "2024-03-08 11:15",
      author: "Sarah M."
    }
  ]);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim()) {
      const note: Note = {
        id: Date.now(),
        text: newNote.trim(),
        timestamp: new Date().toLocaleString(),
        author: "Current User" // We can update this with actual user data later
      };
      setNotes([note, ...notes]);
      setNewNote("");
    }
  };

  return (
    <div className="space-y-6">
      {/* Active Call Banner */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <PhoneIcon className="h-5 w-5 text-green-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              Active Call: 2:34 • {customerData.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Customer Information - First Column */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Customer Information
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p className="mt-1 text-sm text-gray-900">{customerData.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Address</p>
                  <p className="mt-1 text-sm text-gray-900">
                    {customerData.address.street}<br />
                    {customerData.address.city}, {customerData.address.state} {customerData.address.zip}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Contact</p>
                  <p className="mt-1 text-sm text-gray-900">{customerData.phone}</p>
                  <p className="mt-1 text-sm text-gray-900">{customerData.email}</p>
                </div>
              </div>
            </div>

            {/* Service Information - Second Column */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Service Details
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">Next Service</p>
                  <p className="mt-1 text-sm text-gray-900">
                    {new Date(customerData.nextService).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Last Service</p>
                  <p className="mt-1 text-sm text-gray-900">
                    {new Date(customerData.lastService).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Service Type</p>
                  <p className="mt-1 text-sm text-gray-900">{customerData.serviceType}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Account Status</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${customerData.accountStatus === 'active' ? 'bg-green-100 text-green-800' : 
                      customerData.accountStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'}`}>
                    {customerData.accountStatus.charAt(0).toUpperCase() + customerData.accountStatus.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* Map Section - Third Column */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Property Location
              </h2>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <LoadScript googleMapsApiKey="AIzaSyDmAZFu8BC1mr8fBIl_MbBfvB0V6g8-Wpw">
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={customerData.coordinates}
                    zoom={17}
                    options={{
                      streetViewControl: true,
                      mapTypeControl: true,
                      zoomControl: true,
                      fullscreenControl: true
                    }}
                  >
                    <Marker 
                      position={customerData.coordinates}
                      icon={customMarkerIcon}
                      title={`${customerData.address.street}, ${customerData.address.city}, ${customerData.address.state} ${customerData.address.zip}`}
                    />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Customer Notes</h2>
          
          {/* Add Note Form */}
          <div className="mb-6">
            <div className="flex gap-2">
              <textarea
                rows={2}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                placeholder="Add a note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              />
              <button
                type="button"
                onClick={handleAddNote}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Add Note
              </button>
            </div>
          </div>

          {/* Notes List */}
          <div className="space-y-4">
            {notes.map((note) => (
              <div key={note.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-900">{note.text}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{note.author}</span>
                      <span className="mx-1">•</span>
                      <span>{note.timestamp}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveConnect; 