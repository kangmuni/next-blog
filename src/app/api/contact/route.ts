import * as yup from 'yup';
import { sendEmail } from '../../../../service/email';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  title: yup.string().email().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  console.log(body);

  //유효성 검사
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: '메일 전송 실패' }), {
      status: 400,
    });
  }

  return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: '메일 전송 성공' }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.log(error);
      return new Response(JSON.stringify({ message: '메일 전송 실패' }), {
        status: 500,
      });
    });
}
