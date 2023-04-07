import { View } from "react-native";
import styles from "./settingsCard.styles";
import SettingsCard from "./SettingsCard.component";
import { COLORS } from "../../../../constants";
import { useRouter } from "expo-router";

const SettingsContainer = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 10,
          height: "40%",
        }}
      >
        <SettingsCard
          iconName="alert-circle"
          color={COLORS.alert}
          text="Alerts"
        />
      </View>

      <View>
        <SettingsCard
          iconName="account-edit"
          color={COLORS.secondary}
          text="Edit Profile"
        />
        <SettingsCard
          iconName="theme-light-dark"
          color={COLORS.secondary}
          text="Easy Mode"
        />
        <SettingsCard
          iconName="contacts"
          color={COLORS.secondary}
          text="Contacts"
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <SettingsCard
          iconName="theme-light-dark"
          color={COLORS.secondary}
          text="Easy Mode"
        />
        <SettingsCard
          iconName="security"
          color={COLORS.secondary}
          text="Account Security"
        />
        <SettingsCard
          iconName="two-factor-authentication"
          color={COLORS.secondary}
          text="Two Factor Authentication"
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <SettingsCard
          iconName="account-switch"
          color={COLORS.secondary}
          text="Switch Account"
        />
        <SettingsCard
          iconName="information"
          color={COLORS.secondary}
          text="About"
        />
        <SettingsCard
          iconName="help-circle"
          color={COLORS.secondary}
          text="Help"
        />
        <SettingsCard
          iconName="logout"
          color={COLORS.alert}
          text="Log Out"
          onClick={() => router.push("/login")}
        />
      </View>
    </View>
  );
};

export default SettingsContainer;
