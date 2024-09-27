import { createClient } from "@supabase/supabase-js";
import SupabaseContext from "./SupabaseContext";
import PropTypes from "prop-types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

const SupabaseProvider = (props) => {
  const register = async (email, password) => {
      const {data, error} = await supabase.auth.signUp({
        email,
        password,
      });
      console.log(data)
      if (error) throw error;
  };

  const getUsers = async () => {
    try {
      const users = await supabase.from("users").select("*");
      console.log(users);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SupabaseContext.Provider value={{ getUsers, register }}>
      {props.children}
    </SupabaseContext.Provider>
  );
};

SupabaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SupabaseProvider, supabase };