// import { ethers } from "ethers";
// import { env } from "../config/env.js";

// export type PaymentResult = {
// 	txHash: string;
// };

// export async function sendPayment(
// 	recipientAddress: string,
// 	amountWei: string
// ): Promise<PaymentResult> {
// 	if (!env.web3PrivateKey) {
// 		throw new Error("WEB3_PRIVATE_KEY not configured");
// 	}
// 	const provider = new ethers.JsonRpcProvider(env.web3RpcUrl);
// 	const signer = new ethers.Wallet(env.web3PrivateKey, provider);
// 	const tx = await signer.sendTransaction({ to: recipientAddress, value: BigInt(amountWei) });
// 	const receipt = await tx.wait();
// 	return { txHash: receipt?.hash || tx.hash };
// }


