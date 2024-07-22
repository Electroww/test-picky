type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  upvote: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
      <path
        d="M34.8583 17.2027C34.7223 17.5338 34.4913 17.8172 34.1945 18.0172C33.8977 18.2172 33.5483 18.3249 33.1904 18.3267H27.7516V36.4558C27.7516 36.9366 27.5606 37.3978 27.2207 37.7377C26.8807 38.0777 26.4195 38.2687 25.9387 38.2687H15.0613C14.5805 38.2687 14.1193 38.0777 13.7793 37.7377C13.4394 37.3978 13.2484 36.9366 13.2484 36.4558V18.3267H7.80962C7.45171 18.3249 7.10233 18.2172 6.80552 18.0172C6.50871 17.8172 6.27775 17.5338 6.14174 17.2027C6.00291 16.8726 5.96498 16.5087 6.03274 16.157C6.10049 15.8053 6.2709 15.4816 6.52246 15.2266L19.2128 2.53626C19.3814 2.36633 19.5819 2.23146 19.8028 2.13943C20.0237 2.04739 20.2607 2 20.5 2C20.7393 2 20.9763 2.04739 21.1972 2.13943C21.4181 2.23146 21.6186 2.36633 21.7872 2.53626L34.4775 15.2266C34.7291 15.4816 34.8995 15.8053 34.9673 16.157C35.035 16.5087 34.9971 16.8726 34.8583 17.2027Z"
        fill="currentColor"
      />
    </svg>
  ),
  comment: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 2C8.9543 2 0 8.94415 0 17.5102C0 25.7574 8.3 32.5011 18.7754 32.9918L18.7755 36.8848C18.7755 37.9893 19.6709 38.8848 20.7755 38.8848C21.2469 38.8848 21.7032 38.7183 22.0638 38.4146L32.5388 29.5944C37.0889 26.7513 40 22.3944 40 17.5102C40 8.94415 31.0457 2 20 2ZM30 21C31.6569 21 33 19.6569 33 18C33 16.3431 31.6569 15 30 15C28.3431 15 27 16.3431 27 18C27 19.6569 28.3431 21 30 21ZM23 18C23 19.6569 21.6569 21 20 21C18.3431 21 17 19.6569 17 18C17 16.3431 18.3431 15 20 15C21.6569 15 23 16.3431 23 18ZM13 18C13 19.6569 11.6569 21 10 21C8.34315 21 7 19.6569 7 18C7 16.3431 8.34315 15 10 15C11.6569 15 13 16.3431 13 18Z"
        fill="currentColor"
      />
    </svg>
  ),
  bookmark: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
      <path
        d="M7 4.80043C7 3.25331 8.24391 2 9.77941 2H31.2206C32.7561 2 34 3.25331 34 4.80043V35.1943C34 37.4634 31.4626 38.7902 29.6216 37.4853L20.5 31.0187L11.3784 37.4853C9.53733 38.7902 7 37.4634 7 35.1943V4.80043Z"
        fill="currentColor"
      />
    </svg>
  )
};
