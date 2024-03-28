const AuthBtn = ({ icon: Icon, text, color, size }) => {
  return (
    <div className="border-primary mb-[16px] border cursor-pointer rounded-lg flex items-center justify-center py-4 gap-4">
      <Icon color={color} size={size} />
      <span className="font-medium text-xl text-primary">{text}</span>
    </div>
  );
};
 
export default AuthBtn;