import { prisma } from "@/utils/connect";
import {NextResponse } from "next/server";

// export default async function handler(req, res) {
//     try {
//       const data = await prisma.organisations.findMany();
//       await prisma.$disconnect();
  
//       return res.status(200).json(data);
//     } catch (error) {
//       return res.status(500).json(error);
//     }
//   }


export const GET = async () => {
    try {
      const categories = await prisma.organisations.findMany();
      await prisma.$disconnect();
      
      return new NextResponse(JSON.stringify(categories), { status: 200 });
    
    } catch (err) {
      
      console.log(err);
      
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  };