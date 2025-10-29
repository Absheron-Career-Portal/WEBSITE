import "../src/common/style/root.css";
import { LanguageProvider } from "./common/i18n";
import AppRoutes from "./common/routes";
import CustomContextMenu from "./components/context";

const App = () => {
  return (
    <div>
      <LanguageProvider>
        <CustomContextMenu>
          <AppRoutes />
        </CustomContextMenu>
      </LanguageProvider>

    </div>
  )
}

export default App;