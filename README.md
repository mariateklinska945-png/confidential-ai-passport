# Confidential AI Passport

Confidential AI Passport is an n8n-powered workflow that generates transparency reports for AI-driven data processing.

## Problem

Users often do not know:

* Which AI system processed their data
* What data was used
* Why it was processed
* Whether humans reviewed the decision
* How long the data will be retained

## Solution

Confidential AI Passport generates a machine-readable and human-readable passport that explains:

* AI system used
* Purpose of processing
* Data categories processed
* Human involvement
* Retention period
* User notification

## Tech Stack

* n8n
* OpenAI
* Webhooks
* GitHub

## MVP

1. Receive data via webhook
2. Analyze processing activity
3. Generate AI Passport
4. Return structured JSON response

## Future Features

* PDF Passport
* Trust Score
* GDPR Export
* AI Act Compliance Reports
* Supabase Storage
* User Dashboard
