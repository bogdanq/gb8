import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../store/profile";
import { ProfileForm } from "../components";

export const ProfilePage = ({ toggleVisibleProfileWithConnect }) => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <div>
      ProfilePage
      <button onClick={() => dispatch(toggleVisibleProfile())}>
        toggleVisibleProfile
      </button>
      <button onClick={toggleVisibleProfileWithConnect}>
        toggleVisibleProfileWithConnect
      </button>
      <hr />
      {profile.isVisibleProfile && (
        <>
          <h1>{profile.firstName}</h1>
          <h1>{profile.lastName}</h1>

          <ProfileForm
            firstName={profile.firstName}
            lastName={profile.lastName}
          />
        </>
      )}
    </div>
  );
};

// // @TODO witout hooks
// const mapStateToProps = (state) => {
//   return {
//     profile: state.profile,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleVisibleProfileWithConnect: () => dispatch(toggleVisibleProfile()),
//   };
// };

// export const ProfilePageWithConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProfilePage);
