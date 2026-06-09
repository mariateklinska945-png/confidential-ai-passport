# Confidential AI Passport

A lightweight AI transparency layer built with n8n and OpenAI.

## Live Demo

🔗 https://your-netlify-url.netlify.app

## What it does

Confidential AI Passport generates a structured transparency record for AI-powered data processing.

Given:

* Company name
* Processing purpose
* Data being processed

The system generates:

* Passport ID
* AI system used
* Data categories
* Risk level
* Retention period
* Human review status
* User notice

## Architecture

Frontend (Netlify)
↓
n8n Webhook
↓
OpenAI
↓
AI Passport JSON Response

## Example Request

```json
{
  "company": "Acme HR",
  "purpose": "Candidate Screening",
  "data": "Anna Teklinska"
}
```

## Example Response

```json
{
  "passport_id": "AIP-001",
  "company": "Acme HR",
  "purpose": "Candidate Screening",
  "risk_level": "Medium",
  "human_review": true
}
```

## Tech Stack

* n8n
* OpenAI API
* HTML/CSS/JavaScript
* Netlify
* GitHub

## Motivation

As AI systems increasingly process personal data, users rarely receive a clear explanation of how their information is used. Confidential AI Passport explores a simple way to generate transparent, human-readable records for AI-driven decisions.

