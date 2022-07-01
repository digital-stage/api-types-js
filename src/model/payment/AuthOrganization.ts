import { Organization } from '../Organization'
import { BillingAddress } from './BillingAddress'
import { SubscriptionType } from './SubscriptionType'

/**
 * The full interface for an organization, visible only for organization users and living on the auth server
 */
interface AuthOrganization<IdType = string> extends Organization<IdType> {
    /**
     * The amount of stage person hours per month for this organization
     */
    monthlyStagePersonHours: number
    /**
     * How many stages a organization may create
     */
    maxStageCount: number

    /**
     * Current subscription type
     */
    subscription?: SubscriptionType

    /**
     * Timestamp for upcoming renewal, if renewalSubscription is null, then this date won't be modified
     */
    renewalAt?: number

    /**
     * Subscription type after renewal, null means canceled subscription
     */
    subscriptionAfterRenewal?: SubscriptionType | null

    address?: BillingAddress

    payment?: 'paypal' | 'invoice'

    paypalSubscriptionID?: string

    createdAt: string
    updatedAt: string
}

export { AuthOrganization }