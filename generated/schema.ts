// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Master extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Master entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Master entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Master", id.toString(), this);
  }

  static load(id: string): Master | null {
    return store.get("Master", id) as Master | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get ColCode(): string {
    let value = this.get("ColCode");
    return value.toString();
  }

  set ColCode(value: string) {
    this.set("ColCode", Value.fromString(value));
  }

  get MyContract(): Bytes | null {
    let value = this.get("MyContract");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set MyContract(value: Bytes | null) {
    if (value === null) {
      this.unset("MyContract");
    } else {
      this.set("MyContract", Value.fromBytes(value as Bytes));
    }
  }

  get ColName(): string {
    let value = this.get("ColName");
    return value.toString();
  }

  set ColName(value: string) {
    this.set("ColName", Value.fromString(value));
  }

  get ColDescription(): string {
    let value = this.get("ColDescription");
    return value.toString();
  }

  set ColDescription(value: string) {
    this.set("ColDescription", Value.fromString(value));
  }

  get ColProperties(): Array<string | null> {
    let value = this.get("ColProperties");
    return value.toStringArray();
  }

  set ColProperties(value: Array<string | null>) {
    this.set("ColProperties", Value.fromStringArray(value));
  }

  get ColAction(): string {
    let value = this.get("ColAction");
    return value.toString();
  }

  set ColAction(value: string) {
    this.set("ColAction", Value.fromString(value));
  }

  get quantity(): BigInt | null {
    let value = this.get("quantity");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set quantity(value: BigInt | null) {
    if (value === null) {
      this.unset("quantity");
    } else {
      this.set("quantity", Value.fromBigInt(value as BigInt));
    }
  }

  get nftCount(): BigInt | null {
    let value = this.get("nftCount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set nftCount(value: BigInt | null) {
    if (value === null) {
      this.unset("nftCount");
    } else {
      this.set("nftCount", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Collection extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Collection entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Collection entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Collection", id.toString(), this);
  }

  static load(id: string): Collection | null {
    return store.get("Collection", id) as Collection | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

<<<<<<< HEAD
  get tokenID(): BigInt {
    let value = this.get("tokenID");
=======
  get tokenId(): string {
    let value = this.get("tokenId");
    return value.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }

  get NFTContractAddress(): string {
    let value = this.get("NFTContractAddress");
    return value.toString();
  }

  set NFTContractAddress(value: string) {
    this.set("NFTContractAddress", Value.fromString(value));
  }

  get seller(): string {
    let value = this.get("seller");
    return value.toString();
  }

  set seller(value: string) {
    this.set("seller", Value.fromString(value));
  }

  get auctionID(): string {
    let value = this.get("auctionID");
    return value.toString();
  }

  set auctionID(value: string) {
    this.set("auctionID", Value.fromString(value));
  }

  get reservePrice(): BigInt {
    let value = this.get("reservePrice");
    return value.toBigInt();
  }

  set reservePrice(value: BigInt) {
    this.set("reservePrice", Value.fromBigInt(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
>>>>>>> 24efe02af8ac40ae70aa04bf733d35e6567ee47e
    return value.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get ipfsHash(): string {
    let value = this.get("ipfsHash");
    return value.toString();
  }

  set ipfsHash(value: string) {
    this.set("ipfsHash", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get auctionID(): string {
    let value = this.get("auctionID");
    return value.toString();
  }

  set auctionID(value: string) {
    this.set("auctionID", Value.fromString(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get nftInfo(): string {
    let value = this.get("nftInfo");
    return value.toString();
  }

  set nftInfo(value: string) {
    this.set("nftInfo", Value.fromString(value));
  }

  get NFTContractAddress(): Bytes {
    let value = this.get("NFTContractAddress");
    return value.toBytes();
  }

  set NFTContractAddress(value: Bytes) {
    this.set("NFTContractAddress", Value.fromBytes(value));
  }

  get MarketContractAddress(): Bytes {
    let value = this.get("MarketContractAddress");
    return value.toBytes();
  }

  set MarketContractAddress(value: Bytes) {
    this.set("MarketContractAddress", Value.fromBytes(value));
  }

  get TreasuryContractAddress(): Bytes {
    let value = this.get("TreasuryContractAddress");
    return value.toBytes();
  }

  set TreasuryContractAddress(value: Bytes) {
    this.set("TreasuryContractAddress", Value.fromBytes(value));
  }

  get NFTtransactionHash(): string {
    let value = this.get("NFTtransactionHash");
    return value.toString();
  }

  set NFTtransactionHash(value: string) {
    this.set("NFTtransactionHash", Value.fromString(value));
  }

  get NFTtimestamp(): BigInt {
    let value = this.get("NFTtimestamp");
    return value.toBigInt();
  }

  set NFTtimestamp(value: BigInt) {
    this.set("NFTtimestamp", Value.fromBigInt(value));
  }

  get NFTaction(): string {
    let value = this.get("NFTaction");
    return value.toString();
  }

  set NFTaction(value: string) {
    this.set("NFTaction", Value.fromString(value));
  }
}
