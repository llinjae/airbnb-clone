'use client';

import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';

import axios from 'axios';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Button from '../Button';
import useLoginModal from '@/app/hooks/useLoginModal';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      // axios.post 함수를 사용하여 /api/register 엔드포인트로 데이터를 전송
      // then 메서드를 사용하여 POST 요청이 성공했을 때 registerModal.onClose()를 호출하여 회원가입 모달을 닫는다.
      // catch 메서드를 사용하여 POST 요청이 실패했을 때 toast.error를 사용하여 오류 메시지를 표시
      // finally 메서드를 사용하여 요청이 성공하거나 실패한 후에 setIsLoading(false)를 호출하여 로딩 상태를 비활성화
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error('다시 입력해주세요.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='에어비앤비에 오신 것을 환영합니다.'
        subtitle='계정 생성'
      />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='name'
        label='이름'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        label='비밀번호'
        type='password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        outline
        label='구글로 로그인하기'
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label='깃허브로 로그인하기'
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div
        className='
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        '
      >
        <div className='justify-center flex flex-row items-center gap-2'>
          <div>이미 계정이 있으신가요?</div>
          <div
            onClick={registerModal.onClose}
            className='text-neutral-800 cursor-pointer hover:underline'
          >
            로그인
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='회원 가입'
      actionLabel='계속'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
