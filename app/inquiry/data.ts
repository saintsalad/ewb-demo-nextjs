export interface TrackingEntry {
  id: string;
  customerName: string;
  trackingNumber: string;
  referenceNumber: string;
  address: string;
  timeline: {
    status: string;
    timestamp: string;
    details?: string;
  }[];
}

export const trackingData: TrackingEntry[] = [
  {
    id: "639167732238",
    customerName: "CHERRYL MAE B BALDIVIA",
    trackingNumber: "NVPHEWBC000058990",
    referenceNumber: "N-01312025-1612-888333281P",
    address: "PROVINCIAL GOVERNMENT CAPITOL OF ANTIQUE 2F NEW CAPITOL BLDG SAN JOSE ST BRGY 7 SAN JOSE DE BUENAVIST ANTIQUE 5700",
    timeline: [
      {
        status: "Delivered",
        timestamp: "2/10/2025 11:20 AM",
        details: "Parcel delivered"
      },
      {
        status: "Out for Delivery",
        timestamp: "2/10/2025 6:17 AM",
        details: "Parcel being delivered"
      },
      {
        status: "In Transit",
        timestamp: "2/9/2025 4:46 PM",
        details: "Parcel is being processed at NinjaVan warehouse (Antique, SAN JOSE ANTIQUE-ILO-WV)"
      },
      {
        status: "Failed Delivery",
        timestamp: "2/9/2025 4:46 PM",
        details: "Current state: Reattempt Scheduled"
      },
      {
        status: "Pending Reschedule",
        timestamp: "2/9/2025 9:08 AM",
        details: "Customer requested reschedule of delivery. Current state: Pending Reschedule"
      },
      {
        status: "Failed Delivery",
        timestamp: "2/8/2025 5:39 PM",
        details: "Current state: Reattempt Scheduled"
      },
      {
        status: "Failed Delivery",
        timestamp: "2/8/2025 3:50 PM",
        details: "Location is closed or inaccessible. Current state: Pending Reschedule"
      },
      {
        status: "In Transit",
        timestamp: "2/6/2025 12:15 AM",
        details: "Parcel is being processed at NinjaVan warehouse (Laguna, WH-CBY)"
      },
      {
        status: "Order Created",
        timestamp: "2/3/2025 8:02 PM",
        details: "Order has been created"
      }
    ]
  },
  {
    id: "639971653500",
    customerName: "ROSALIE L ARANCES",
    trackingNumber: "NVPHEWBC000058991",
    referenceNumber: "N-01312025-1567-888336164P",
    address: "",
    timeline: []
  },
  {
    id: "639763682276",
    customerName: "CHARLES BRIAN U CASTOR",
    trackingNumber: "NVPHEWBC000058988",
    referenceNumber: "N-01312025-1712-888333840P",
    address: "",
    timeline: []
  },
  {
    id: "639107176620",
    customerName: "CHARLOTTE Q GARCINEZ",
    trackingNumber: "NVPHEWBC000058986",
    referenceNumber: "",
    address: "",
    timeline: []
  }
]; 