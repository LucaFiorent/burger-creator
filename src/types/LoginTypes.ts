export type errMessType = {
  title: string;
  errText: string;
};
export interface LoginFormProps {
  onSubmit: (props: any) => void;
  errMss: errMssType;
}

export type userDataType = {
  name: string;
  password: string;
};

export type AuthContextProps = {
  token: string;
  isLogin: boolean;
  login: (token: string) => void;
  logout: () => void;
};
