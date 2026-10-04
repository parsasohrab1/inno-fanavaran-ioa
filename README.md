# inno-fanavaran-ioa
Part One: Understanding the Products, Inputs and Outputs of Fanavaran Petrochemical
Based on available information, Fanavaran Petrochemical (founded in 1377 [1998] in the Bandar Imam Khomeini Petrochemical Special Economic Zone) has the following characteristics:

Feature	Description
Main products	Methanol (nominal capacity 1 million tons per year), acetic acid (150 thousand tons), carbon monoxide (140 thousand tons)
Feed input	Natural gas
Product applications	Production of acetic acid, formaldehyde, solvents, pharmaceuticals, paints
Location	Southwest Iran, Petrochemical Special Economic Zone, area of 25 hectares
Part Two: Detailed SRS (Software Requirements Specification)
1. Document Purpose
This document defines the software requirements for the Intelligent Operator Assistant (IOA) for Fanavaran Petrochemical. Using large language models, the system helps control room operators with troubleshooting, alarm analysis and operational decision-making.

2. System Overview
2.1 Product Vision
IOA is an LLM-based intelligent dashboard that receives and analyzes, in real time, process data of the methanol, acetic acid and carbon monoxide units and provides operational recommendations to the operator. The system is designed with a Multi-Agent LLM and Retrieval-Augmented Generation (RAG) approach.

2.2 System Users
Control room operators: primary users who interact with the dashboard.

Process engineers: for deeper analysis and updating the system's knowledge.

Technical managers: to monitor system performance and receive analytical reports.

3. Functional Requirements
Code	Requirement	Description
FR-01	Real-time data acquisition	Connect to control systems (such as DCS) to receive instantaneous temperature, pressure, flow, tank levels and other process parameters of the methanol, acetic acid and CO units
FR-02	Alarm management and analysis	Receive all system alarms, prioritize them intelligently based on severity and risk, and provide root cause analysis in plain language
FR-03	Alarm conversion to natural language	Convert structured alarm data into semantic descriptions understandable to the LLM (for example: "The methanol unit reactor temperature has exceeded 350 degrees and pressure is rising")
FR-04	Intelligent troubleshooting	Use the LLM for chained cause analysis and provide step-by-step suggestions to fix the fault
FR-05	Operational advisor	Provide operational recommendations based on best practices and available technical documentation (changing temperature, adjusting valves, reducing/increasing feed, etc.)
FR-06	Historical knowledge search	Using RAG, search technical documents, previous reports and operating procedures to find similar cases
FR-07	Visual dashboard	Graphical display of process data, alarm status, probable fault paths and recommendations as charts, color coding and heat maps
FR-08	Interactive conversation	Ability to converse in Persian with the operator for questions and answers about the process status
FR-09	Alarm prediction	Analyze data trends and warn before an alarm occurs (similar to the Honeywell example with 5-10 minutes of prediction)
FR-10	Logging and reporting	Record all interactions, recommendations and actions taken for auditing and model improvement
4. System Inputs and Outputs
Inputs
Input type	Source	Example
Real-time process data	DCS / SCADA	Temperature, pressure, flow, level, output composition
Alarms	Fire and gas alarm system, DCS	High pressure, high temperature, leak alarms
Technical documents	Company database	P&ID, operating procedures, previous reports
Operator text input	Chatbot	"Why has the methanol unit reactor temperature increased?"
Outputs
Output type	Destination	Example
Operational recommendations	Operator screen	"Reduce natural gas feed to the methanol unit by 5% and check control valve PV-203"
Root cause analysis	Dashboard	"The reactor temperature increase is caused by a reduction in cooling water flow to exchanger E-101"
Predictive alerts	Dashboard	"Compressor K-201 pressure is predicted to increase in the next 8 minutes"
Analytical reports	Email / reporting system	Daily report on unit performance and managed alarms
5. Proposed Technical Architecture
text
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer (Dashboard)            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────────┐ │
│  │Charts    │ │Alarm     │ │Chatbot   │ │Operational     │ │
│  └──────────┘ └──────────┘ └──────────┘ └────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    Logic Layer (LLM Engine)                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │   Multi-Agent LLM Framework                         │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────┐ │    │
│  │  │Data Agent│ │Fault Agent│ │Viz Agent │ │Assist │ │    │
│  │  └──────────┘ └──────────┘ └──────────┘ └───────┘ │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │   RAG Module (technical knowledge + docs + history) │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    Data Layer                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────────┐ │
│  │DCS/SCADA │ │History   │ │Technical │ │Knowledge Base  │ │
│  │Real-time │ │Alarms    │ │Documents │ │(Vector DB)     │ │
│  └──────────┘ └──────────┘ └──────────┘ └────────────────┘ │
└─────────────────────────────────────────────────────────────┘
6. Synthetic Data
Below is a sample of synthetic data for training and testing the system:

6.1 Real-Time Process Data (JSON format)
json
[
  {
    "timestamp": "2026-08-24T10:30:00Z",
    "unit": "Methanol",
    "tags": {
      "T-101": {"value": 352.4, "unit": "°C", "status": "HIGH_ALARM"},
      "P-101": {"value": 42.1, "unit": "bar", "status": "NORMAL"},
      "F-101": {"value": 18500, "unit": "kg/h", "status": "NORMAL"},
      "L-101": {"value": 68.2, "unit": "%", "status": "NORMAL"}
    }
  },
  {
    "timestamp": "2026-08-24T10:30:00Z",
    "unit": "Acetic_Acid",
    "tags": {
      "T-201": {"value": 118.3, "unit": "°C", "status": "NORMAL"},
      "P-201": {"value": 3.2, "unit": "bar", "status": "NORMAL"},
      "F-201": {"value": 6200, "unit": "kg/h", "status": "NORMAL"}
    }
  },
  {
    "timestamp": "2026-08-24T10:30:00Z",
    "unit": "CO",
    "tags": {
      "T-301": {"value": 28.7, "unit": "°C", "status": "NORMAL"},
      "P-301": {"value": 1.8, "unit": "bar", "status": "LOW_ALARM"},
      "F-301": {"value": 4250, "unit": "kg/h", "status": "NORMAL"}
    }
  }
]
6.2 Alarm Data (JSON format)
json
[
  {
    "alarm_id": "ALM-2026-08-24-001",
    "timestamp": "2026-08-24T10:30:00Z",
    "unit": "Methanol",
    "tag": "T-101",
    "description": "Reactor R-101 temperature has exceeded the allowed limit of 350°C",
    "severity": "CRITICAL",
    "current_value": 352.4,
    "threshold": 350.0,
    "unit": "°C",
    "status": "ACTIVE",
    "possible_causes": [
      "Reduced cooling water flow to exchanger E-101",
      "Sudden increase in natural gas feed",
      "Fouling in the heat exchanger"
    ]
  },
  {
    "alarm_id": "ALM-2026-08-24-002",
    "timestamp": "2026-08-24T10:32:15Z",
    "unit": "CO",
    "tag": "P-301",
    "description": "CO transfer line pressure is below the allowed limit",
    "severity": "WARNING",
    "current_value": 1.8,
    "threshold": 2.0,
    "unit": "bar",
    "status": "ACTIVE",
    "possible_causes": [
      "Leak in the transfer line",
      "Reduced production of the CO unit",
      "Partial closure of valve PV-301"
    ]
  }
]
6.3 Knowledge Base Data (for RAG)
json
[
  {
    "doc_id": "DOC-001",
    "category": "SOP",
    "unit": "Methanol",
    "title": "Procedure for managing reactor R-101 temperature increase",
    "content": "If the temperature of reactor R-101 rises above 350°C: 1) Check the cooling water flow to exchanger E-101 and increase it if needed. 2) Reduce natural gas feed by 5-10%. 3) If the trend continues, shut down the unit in a controlled manner.",
    "tags": ["reactor", "temperature", "high_alarm", "R-101"]
  },
  {
    "doc_id": "DOC-002",
    "category": "Incident_Report",
    "unit": "CO",
    "title": "Incident report: CO line pressure drop - 1402/05/12",
    "content": "On 1402/05/12, the CO transfer line pressure dropped to 1.7 bar. Cause: leak at a flange connection of the compressor discharge line. Action: replaced the gasket and inspected all connections.",
    "tags": ["CO", "pressure", "leak", "flange"]
  },
  {
    "doc_id": "DOC-003",
    "category": "Best_Practice",
    "unit": "Acetic_Acid",
    "title": "Optimizing the operating conditions of the acetic acid unit",
    "content": "To increase the yield of the acetic acid unit, the methanol-to-carbon-monoxide feed ratio must be kept in the range of 1.05-1.10. Set the reactor temperature at 118-120°C and the pressure at 3.0-3.5 bar.",
    "tags": ["Acetic_Acid", "optimization", "operating_conditions"]
  }
]
6.4 Sample Chatbot Interaction (Input/Output)
Operator input:

"Why has the methanol unit reactor temperature gone up? What should I do?"

System output (LLM Response):

Based on real-time data analysis:

Probable cause: cooling water flow to exchanger E-101 dropped from 120 to 95 cubic meters per hour over the past 5 minutes.

Operational recommendations (prioritized):

Immediate: Return the cooling water flow to 120 cubic meters (open valve CV-101 by 15%).

Follow-up: After the temperature stabilizes, inspect exchanger E-101 for fouling (a similar report was recorded on 1401/09/12).

Prevention: Gradually reduce natural gas feed by 3% to prevent recurrence.

Sources: SOP-001 document and incident report INC-2023-045.

---

## Part Three: Frontend Scaffold

Initial implementation of the IOA dashboard with **Next.js (App Router) + TypeScript + Tailwind CSS**, with pages for overview, production, equipment, alerts, reports and settings (currently with sample/mock data — connection to the real DCS/SCADA and RAG per FR-01 to FR-10 will be done in later phases).

### Running

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Building the Production Version

```bash
npm run build
npm start
```

### Folder Structure

- `src/app/(dashboard)/` — dashboard pages (overview, production, equipment, alerts, reports, settings)
- `src/components/` — shared components (Sidebar, Topbar, KPI Card, Badges)
- `src/lib/types.ts` — domain types (Equipment, ProductionLine, PlantAlert, ...)
- `src/lib/mock-data.ts` — sample data until connection to the real DCS/SCADA
- `confidential/` — confidential documents (such as patent reviews), which can only be committed in encrypted form (`.gpg`) — see `confidential/README.md`.
