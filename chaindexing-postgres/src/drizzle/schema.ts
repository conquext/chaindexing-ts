import {
  boolean,
  date,
  integer,
  json,
  pgTable,
  serial,
  text,
  uniqueIndex,
  uuid
} from 'drizzle-orm/pg-core';

export const chaindexing_contract_addresses = pgTable(
  'chaindexing_contract_addresses',
  {
    id: serial('id').primaryKey(),
    chainId: integer('chain_id'),
    lastIngestedBlockNumber: integer('last_ingested_block_number'),
    startBlockNumber: integer('start_block_number'),
    address: text('address'),
    contractName: text('contract_name')
  },
  (chaindexingContractAddress) => ({
    chaindexingContractAddressesChainAddressIndex: uniqueIndex(
      'chaindexing_contract_addresses_chain_address_index'
    ).on(chaindexingContractAddress.chainId, chaindexingContractAddress.address)
  })
);

export const chaindexing_events = pgTable('chaindexing_events', {
  id: uuid('id').primaryKey(),
  contractAddress: text('contract_address'),
  contractName: text('contract_name'),
  abi: text('abi'),
  logParams: json('log_params'),
  parameters: json('parameters'),
  topics: json('topics'),
  blockHash: json('block_hash'),
  blockNumber: integer('block_number'),
  transactionHash: json('transaction_hash'),
  transactionIndex: integer('transaction_index'),
  logIndex: integer('log_index'),
  removed: boolean('removed'),
  insertedAt: date('removed')
});
