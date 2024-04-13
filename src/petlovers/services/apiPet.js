const baseURL = 'http://localhost:3000';

export const cadastrarPet = async (dadosPet) => {
  try {
    const response = await fetch(`${baseURL}/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosPet),
    });
    if (!response.ok) {
      throw new Error('Erro ao cadastrar pet');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
