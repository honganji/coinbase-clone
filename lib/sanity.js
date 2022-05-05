import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'mws9roq1',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skNZDw0SbCxegIULNWP2e0FTpsXi5m4sImOyhHdn1u3lXcxorYjCaG9VRBZwnzqDwTJtDwUktAq0Mo9ew81kaN2eGbBEUJvFUOZS6ho9g3zONvuSbV1gXnaVYCDz8xvPASbUGZDMS9YrYGsSMtTSFkGiE19sofHZSy3ZkASMxmwktMTSaeCo',
    useCdn: false
})