// Accountancy Firm File:

import {TaxService, FinancialService} from './services';

export class AccountancyFirm {
  private taxService: TaxService;
  private financialService: FinancialService;

  constructor(taxService: TaxService, financialService: FinancialService) {
    this.taxService = taxService;
    this.financialService = financialService;
  }

  public provideTaxServices(client: Client): void {
    this.taxService.calculateTaxes(client);
  }

  public provideFinancialServices(client: Client): void {
    this.financialService.calculateFinancialOutlook(client);
  }
}

export class Client {
  public name: string;
  public businessSize: BusinessSize;

  constructor(name: string, businessSize: BusinessSize) {
    this.name = name;
    this.businessSize = businessSize;
  }
}

export enum BusinessSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

// Services File:

export class TaxService {
  public calculateTaxes(client: Client): void {
    // Tax calculation logic here
  }
}

export class FinancialService {
  public calculateFinancialOutlook(client: Client): void {
    // Financial calculation logic here
  }
}