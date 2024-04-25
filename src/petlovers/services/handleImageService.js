import * as ImagePicker from 'expo-image-picker';

export const pickImage = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      return result.assets[0].uri;
    }
  } catch (error) {
    console.error('Erro ao selecionar imagem:', error);
    throw new Error('Falha ao selecionar imagem. Por favor, tente novamente.');
  }
};
