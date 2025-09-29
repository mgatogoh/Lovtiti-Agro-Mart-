// import { Produce } from "../models/produce.model";
// import { ipfs } from "../config/ipfs";
// import { produceContract } from "../config/contract";

// export const farmerService = {
//   async registerProduce(data: any) {
//     // Upload metadata to IPFS
//     const { farmer, price, details } = data;
//     const { cid } = await ipfs.add(JSON.stringify(details));

//     // Save in DB
//     const produce = await Produce.create({
//       farmer,
//       price,
//       ipfsHash: cid.toString(),
//     });

//     // Register on blockchain
//     const tx = await produceContract.registerProduce(cid.toString());
//     await tx.wait();

//     return produce;
//   },
// };
