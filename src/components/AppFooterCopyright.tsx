function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg font-semibold text-primary">
        &copy; {new Date().getFullYear()} GIDEON SIMIYU
      </div>
    </div>
  );
}

export default AppFooterCopyright;
