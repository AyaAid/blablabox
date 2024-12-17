import * as crypto from 'crypto'
import { IdProvider } from './id-provider'

export class CryptoIdProvider implements IdProvider {
    generate() {
        return crypto.randomUUID()
    }
}
