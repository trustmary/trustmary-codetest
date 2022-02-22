import axios, { AxiosInstance } from 'axios'
const { TRUSTMARY_API = 'https://api.trustmary.io/' } = process.env

interface ListItem {
  id: string
  type: 'customer' | 'employee'
  count: number
  name: string
  source: string
  created_at: string
  updated_at: string
  deleted_at: string | null
}

interface CreateContactInput {
  email: string
  name?: string
  phone?: string
  company?: string
  type?: 'customer' | 'employee'
  addToLists?: string[]
  eid?: string
  [key: string]: any
}

interface Contact {
  id: string
  email: string
  name?: string
  phone?: string
  company?: string
  created_at?: string
  updated_at?: string
  deleted_at?: null
  last_action?: null
  status?: string
  type?: 'customer' | 'employee'
  eid?: string
  [key: string]: any
}

interface AddFieldInput {
  type: string
  code: string
  label: string
  options?: any[]
  entities: Array<'review' | 'contact' | 'automation_contact'>
}

interface Field extends AddFieldInput {
  id: string
  created_at: string
  updated_at: string
}

interface SubscribeWebhookInput {
  name: string
  hookUrl: string
  events: Array<'surveyAnswerComplete' | 'newSurveyAnswer' | 'newReview'>
}

interface Webhook extends SubscribeWebhookInput {
  created_at: string
  disabled: boolean
}

interface ITest {
  message: string
  organization_id: string
  organization_name: string
  api_key_name: string
}

/**
 * This is Trustmary api client example.
 * @TODO: We need to add more endpoints here.
 */

export class TrustmaryClient {
  private api: AxiosInstance

  constructor(apikey: string) {
    this.api = axios.create({
      baseURL: `${TRUSTMARY_API}`,
      headers: {
        Authorization: `Apikey ${apikey}`,
      },
    })
  }

  getSurveys() {
    return this.api.get('/v1/surveys').then(({ data }) => data.surveys)
  }

  getLists(): Promise<ListItem[]> {
    return this.api.get('/v1/lists').then(({ data }) => data.lists)
  }

  createContact(contactData: CreateContactInput): Promise<{
    contact: Contact
    action: 'IMPORT_UPDATE' | 'IMPORT_CREATE'
    listsUpdated: number
  }> {
    return this.api.post('/v1/contacts', contactData).then(({ data }) => data)
  }

  addField(field: AddFieldInput): Promise<Field> {
    return this.api.post('/v1/fields', field).then(({ data }) => data.field)
  }

  getFields(): Promise<Field[]> {
    return this.api.get('/v1/fields').then(({ data }) => data.fields)
  }

  subscribeWebhook(subscriptionData: SubscribeWebhookInput): Promise<Webhook> {
    return this.api.post('/v1/webhooks', subscriptionData).then(({ data }) => data.webhook)
  }

  test(): Promise<ITest> {
    return this.api.post('/v1/test').then(({ data }) => data)
  }
}
