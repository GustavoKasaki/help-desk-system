'use client'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { IoArrowBack } from 'react-icons/io5'
import { FaRegSave } from 'react-icons/fa'

import { toggleCreate } from '@/redux/reducers/userSlice'
import Button from '@/components/Button/Button'
import UserList from '@/components/UserList/UserList'
import UserForm from '@/components/UserForm/UserForm'

import * as S from './styles'

const Tickets = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isCreating } = useSelector((state: RootState) => state.users)

  return (
    <>
      <S.Header>
        <h1>User Registry</h1>
        {isCreating ? (
          <S.Buttons>
            <Button
              icon={IoArrowBack}
              iconOnly={true}
              width="150px"
              onClick={() => dispatch(toggleCreate())}
            />
            <Button
              icon={FaRegSave}
              iconOnly={true}
              width="150px"
              type="submit"
              form="userForm"
            />
          </S.Buttons>
        ) : (
          <Button
            titulo={'New'}
            width="100px"
            onClick={() => dispatch(toggleCreate())}
          />
        )}
      </S.Header>
      <S.PageContent>{isCreating ? <UserForm /> : <UserList />}</S.PageContent>
    </>
  )
}

export default Tickets
