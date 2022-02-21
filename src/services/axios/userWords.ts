import { IUserWord } from 'src/types/schemas/UserWord.type';
import { client } from '.';

const getPrefix = (id: string) => `/users/${id}/words/`;

export const updateUserWord = async ({
  userId,
  wordId,
  token,
  modifyCallback,
}: {
  userId: string;
  token: string;
  wordId: string;
  modifyCallback: (userWord: IUserWord | Record<string, never>) => IUserWord;
}) => {
  try {
    const initialUserWord = (
      await client.get(`${getPrefix(userId)}${wordId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).data;

    delete initialUserWord.id;
    delete initialUserWord.wordId;

    await client.put(
      `${getPrefix(userId)}${wordId}`,
      modifyCallback(initialUserWord),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (err) {
    await client.post(`${getPrefix(userId)}${wordId}`, modifyCallback({}), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
};
