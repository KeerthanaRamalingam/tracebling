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

  get colCode(): string {
    let value = this.get("colCode");
    return value.toString();
  }

  set colCode(value: string) {
    this.set("colCode", Value.fromString(value));
  }

  get myContract(): Bytes | null {
    let value = this.get("myContract");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set myContract(value: Bytes | null) {
    if (value === null) {
      this.unset("myContract");
    } else {
      this.set("myContract", Value.fromBytes(value as Bytes));
    }
  }

  get colName(): string {
    let value = this.get("colName");
    return value.toString();
  }

  set colName(value: string) {
    this.set("colName", Value.fromString(value));
  }

  get colDescription(): string {
    let value = this.get("colDescription");
    return value.toString();
  }

  set colDescription(value: string) {
    this.set("colDescription", Value.fromString(value));
  }

  get colProperties(): Array<string | null> {
    let value = this.get("colProperties");
    return value.toStringArray();
  }

  set colProperties(value: Array<string | null>) {
    this.set("colProperties", Value.fromStringArray(value));
  }

  get colAction(): string {
    let value = this.get("colAction");
    return value.toString();
  }

  set colAction(value: string) {
    this.set("colAction", Value.fromString(value));
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

  get collectionAction(): string {
    let value = this.get("collectionAction");
    return value.toString();
  }

  set collectionAction(value: string) {
    this.set("collectionAction", Value.fromString(value));
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

  get tokenID(): BigInt {
    let value = this.get("tokenID");
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

  get nftContractAddress(): Bytes {
    let value = this.get("nftContractAddress");
    return value.toBytes();
  }

  set nftContractAddress(value: Bytes) {
    this.set("nftContractAddress", Value.fromBytes(value));
  }

  get marketContractAddress(): Bytes {
    let value = this.get("marketContractAddress");
    return value.toBytes();
  }

  set marketContractAddress(value: Bytes) {
    this.set("marketContractAddress", Value.fromBytes(value));
  }

  get treasuryContractAddress(): Bytes {
    let value = this.get("treasuryContractAddress");
    return value.toBytes();
  }

  set treasuryContractAddress(value: Bytes) {
    this.set("treasuryContractAddress", Value.fromBytes(value));
  }

  get nftTransactionHash(): string {
    let value = this.get("nftTransactionHash");
    return value.toString();
  }

  set nftTransactionHash(value: string) {
    this.set("nftTransactionHash", Value.fromString(value));
  }

  get nftTimestamp(): BigInt {
    let value = this.get("nftTimestamp");
    return value.toBigInt();
  }

  set nftTimestamp(value: BigInt) {
    this.set("nftTimestamp", Value.fromBigInt(value));
  }

  get nftAction(): string {
    let value = this.get("nftAction");
    return value.toString();
  }

  set nftAction(value: string) {
    this.set("nftAction", Value.fromString(value));
  }

  get colCode(): string {
    let value = this.get("colCode");
    return value.toString();
  }

  set colCode(value: string) {
    this.set("colCode", Value.fromString(value));
  }

  get colName(): string {
    let value = this.get("colName");
    return value.toString();
  }

  set colName(value: string) {
    this.set("colName", Value.fromString(value));
  }

  get colDescription(): string {
    let value = this.get("colDescription");
    return value.toString();
  }

  set colDescription(value: string) {
    this.set("colDescription", Value.fromString(value));
  }

  get colProperties(): Array<string | null> {
    let value = this.get("colProperties");
    return value.toStringArray();
  }

  set colProperties(value: Array<string | null>) {
    this.set("colProperties", Value.fromStringArray(value));
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

  get seller(): string | null {
    let value = this.get("seller");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set seller(value: string | null) {
    if (value === null) {
      this.unset("seller");
    } else {
      this.set("seller", Value.fromString(value as string));
    }
  }

  get reservePrice(): BigInt | null {
    let value = this.get("reservePrice");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set reservePrice(value: BigInt | null) {
    if (value === null) {
      this.unset("reservePrice");
    } else {
      this.set("reservePrice", Value.fromBigInt(value as BigInt));
    }
  }

  get startTime(): BigInt | null {
    let value = this.get("startTime");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set startTime(value: BigInt | null) {
    if (value === null) {
      this.unset("startTime");
    } else {
      this.set("startTime", Value.fromBigInt(value as BigInt));
    }
  }

  get endTime(): BigInt | null {
    let value = this.get("endTime");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endTime(value: BigInt | null) {
    if (value === null) {
      this.unset("endTime");
    } else {
      this.set("endTime", Value.fromBigInt(value as BigInt));
    }
  }

  get bidder(): Bytes | null {
    let value = this.get("bidder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set bidder(value: Bytes | null) {
    if (value === null) {
      this.unset("bidder");
    } else {
      this.set("bidder", Value.fromBytes(value as Bytes));
    }
  }

  get auctionTransactionHash(): string | null {
    let value = this.get("auctionTransactionHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set auctionTransactionHash(value: string | null) {
    if (value === null) {
      this.unset("auctionTransactionHash");
    } else {
      this.set("auctionTransactionHash", Value.fromString(value as string));
    }
  }

  get auctionTimestamp(): BigInt | null {
    let value = this.get("auctionTimestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set auctionTimestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("auctionTimestamp");
    } else {
      this.set("auctionTimestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get auctionAction(): string | null {
    let value = this.get("auctionAction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set auctionAction(value: string | null) {
    if (value === null) {
      this.unset("auctionAction");
    } else {
      this.set("auctionAction", Value.fromString(value as string));
    }
  }

  get tokenAddress(): string | null {
    let value = this.get("tokenAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenAddress(value: string | null) {
    if (value === null) {
      this.unset("tokenAddress");
    } else {
      this.set("tokenAddress", Value.fromString(value as string));
    }
  }

  get tokenName(): string | null {
    let value = this.get("tokenName");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenName(value: string | null) {
    if (value === null) {
      this.unset("tokenName");
    } else {
      this.set("tokenName", Value.fromString(value as string));
    }
  }

  get bidList(): Array<string> | null {
    let value = this.get("bidList");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set bidList(value: Array<string> | null) {
    if (value === null) {
      this.unset("bidList");
    } else {
      this.set("bidList", Value.fromStringArray(value as Array<string>));
    }
  }

  get history(): Array<string> | null {
    let value = this.get("history");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set history(value: Array<string> | null) {
    if (value === null) {
      this.unset("history");
    } else {
      this.set("history", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bid entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bid entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bid", id.toString(), this);
  }

  static load(id: string): Bid | null {
    return store.get("Bid", id) as Bid | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get auctionID(): BigInt {
    let value = this.get("auctionID");
    return value.toBigInt();
  }

  set auctionID(value: BigInt) {
    this.set("auctionID", Value.fromBigInt(value));
  }

  get number(): BigInt | null {
    let value = this.get("number");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set number(value: BigInt | null) {
    if (value === null) {
      this.unset("number");
    } else {
      this.set("number", Value.fromBigInt(value as BigInt));
    }
  }

  get bidder(): string | null {
    let value = this.get("bidder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bidder(value: string | null) {
    if (value === null) {
      this.unset("bidder");
    } else {
      this.set("bidder", Value.fromString(value as string));
    }
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (value === null) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(value as BigInt));
    }
  }

  get endTime(): BigInt | null {
    let value = this.get("endTime");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endTime(value: BigInt | null) {
    if (value === null) {
      this.unset("endTime");
    } else {
      this.set("endTime", Value.fromBigInt(value as BigInt));
    }
  }

  get transactionHash(): string | null {
    let value = this.get("transactionHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transactionHash(value: string | null) {
    if (value === null) {
      this.unset("transactionHash");
    } else {
      this.set("transactionHash", Value.fromString(value as string));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get action(): string | null {
    let value = this.get("action");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set action(value: string | null) {
    if (value === null) {
      this.unset("action");
    } else {
      this.set("action", Value.fromString(value as string));
    }
  }

  get colDetails(): string {
    let value = this.get("colDetails");
    return value.toString();
  }

  set colDetails(value: string) {
    this.set("colDetails", Value.fromString(value));
  }
}

export class Auction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Auction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Auction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Auction", id.toString(), this);
  }

  static load(id: string): Auction | null {
    return store.get("Auction", id) as Auction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt | null {
    let value = this.get("tokenID");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenID(value: BigInt | null) {
    if (value === null) {
      this.unset("tokenID");
    } else {
      this.set("tokenID", Value.fromBigInt(value as BigInt));
    }
  }

  get nftContract(): Bytes | null {
    let value = this.get("nftContract");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set nftContract(value: Bytes | null) {
    if (value === null) {
      this.unset("nftContract");
    } else {
      this.set("nftContract", Value.fromBytes(value as Bytes));
    }
  }

  get index(): string | null {
    let value = this.get("index");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set index(value: string | null) {
    if (value === null) {
      this.unset("index");
    } else {
      this.set("index", Value.fromString(value as string));
    }
  }
}

export class History extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save History entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save History entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("History", id.toString(), this);
  }

  static load(id: string): History | null {
    return store.get("History", id) as History | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes | null {
    let value = this.get("address");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes | null) {
    if (value === null) {
      this.unset("address");
    } else {
      this.set("address", Value.fromBytes(value as Bytes));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get action(): string | null {
    let value = this.get("action");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set action(value: string | null) {
    if (value === null) {
      this.unset("action");
    } else {
      this.set("action", Value.fromString(value as string));
    }
  }

  get amount(): string | null {
    let value = this.get("amount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set amount(value: string | null) {
    if (value === null) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromString(value as string));
    }
  }
}
