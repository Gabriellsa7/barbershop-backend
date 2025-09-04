import express, { Request, Response } from "express";
import prisma from "./prisma/client";

const app = express();

app.use(express.json());

// rota de teste
app.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json({
      message: "🚀 API rodando com sucesso!",
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao conectar no banco" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server rodando em http://localhost:${PORT}`);
});
