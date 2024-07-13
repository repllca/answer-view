const root_url = "http://"+"localhost:8000/"
const login = "auth/login/"
const register = "auth/register/"
const user= "auth/detail/"
const kadai_list= "myapp/kadai/list/"
const kadai_create= "create/"
const kadai_user_list = "myapp/kadai/user/list/"

const requests = {
  login_url :root_url + login,
  register_url: root_url + register,
  user_url: root_url + user,
  kadai_list_url: root_url + kadai_list,
  kadai_create_url: root_url + kadai_create,
  kadai_user_list_url: root_url + kadai_user_list
  
};

export default requests;
