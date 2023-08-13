import request from '@/utils/request'

export const userRegisterService = ({ username, password, repassword }) => {
  request.post('/api/reg', { username, password, repassword })
}
