'use client';

import { useState } from 'react';
import { ArrowLeft, Info, Search } from 'lucide-react';
import { DeliveryTimeline } from '../../components/delivery-timeline';
import { trackingData } from './data';
import Link from 'next/link';

export default function Inquiry() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedEntry, setSelectedEntry] = useState(trackingData[0]);

  const handleSearch = () => {
    const found = trackingData.find(entry => 
      entry.id === searchValue ||
      entry.trackingNumber === searchValue ||
      entry.referenceNumber === searchValue ||
      entry.customerName.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (found) {
      setSelectedEntry(found);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-3">
          <Link href="/" className="inline-flex items-center text-purple-800 font-medium transition-colors duration-200 hover:text-purple-600">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-lg">Inquiry</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Search and List */}
          <div className="md:w-2/5">
            {/* Search Filter */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6 transition-shadow duration-300 hover:shadow-md">
              <h2 className="text-lg font-medium mb-4">Filter Details</h2>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="639"
                    className="w-full border border-gray-200 rounded-md p-2 pl-9 mb-2 transition-all duration-200 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-300"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Any part of the name"
                    className="w-full border border-gray-200 rounded-md p-2 pl-9 mb-2 transition-all duration-200 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-300"
                  />
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="CDMS Reference Number"
                    className="w-full border border-gray-200 rounded-md p-2 pl-9 mb-2 transition-all duration-200 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-300"
                  />
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                </div>
                <button 
                  onClick={handleSearch}
                  className="w-full bg-gray-800 text-white py-3 rounded-md transition-all duration-200 hover:bg-gray-700"
                >
                  Search
                </button>
              </div>
            </div>

            {/* List of Items */}
            <div className="space-y-2">
              {trackingData.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry)}
                  className={`w-full p-3 rounded-md text-left transition-all duration-200 hover:bg-white hover:shadow-md border border-gray-200 
                    ${selectedEntry.id === entry.id ? 'bg-white shadow-sm border-purple-200' : 'bg-gray-50'}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{entry.customerName}</p>
                      <p className="text-sm text-gray-600">{entry.id}</p>
                      <p className="text-sm text-gray-600">{entry.trackingNumber}</p>
                      <p className="text-sm text-gray-600">{entry.referenceNumber}</p>
                    </div>
                    <div className="mt-1">
                      <ArrowLeft className="w-4 h-4 transform rotate-180 text-gray-400 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="md:w-3/5 pt-6 md:pt-0">
            {selectedEntry && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-semibold">{selectedEntry.customerName}</h3>
                    <p className="text-sm text-gray-600 mt-2">{selectedEntry.address}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                      <p><span className="text-gray-500">Tracking: </span>{selectedEntry.trackingNumber}</p>
                      <p><span className="text-gray-500">Reference: </span>{selectedEntry.referenceNumber}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                    <Info className="w-5 h-5" />
                  </button>
                </div>

                {/* Tracking Timeline */}
                <div className="mt-8 pl-2 pb-4">
                  <h4 className="text-gray-500 font-medium text-sm mb-4">DELIVERY TRACKING</h4>
                  <DeliveryTimeline timeline={selectedEntry.timeline} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}