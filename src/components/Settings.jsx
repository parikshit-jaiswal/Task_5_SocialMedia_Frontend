import React from "react";
import {
  KeyRound,
  User,
  Users,
  Bookmark,
  Clock,
  UserMinus,
  Lock,
  Languages,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

function Settings() {
  return (
    <div
      className="min-h-screen max-w-md mx-auto p-6 text-white"
      style={{ backgroundColor: "#111111" }}
    >
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      {/* Accounts Center */}
      <div
        className="rounded-lg p-4 mb-4 shadow-md border"
        style={{ backgroundColor: "#111111", borderColor: "#bbacf2" }}
      >
        <h2 className="text-lg font-medium mb-2">Accounts Center</h2>
        <p className="text-sm text-gray-400 mb-4">
          Password, security, personal details, ad preferences
        </p>

        <div className="space-y-3">
          <button className="w-full flex items-center text-left hover:bg-gray-800 p-2 rounded-md">
            <KeyRound className="w-5 h-5 mr-3" />
            <span>Password and security</span>
          </button>
          <button className="w-full flex items-center text-left hover:bg-gray-800 p-2 rounded-md">
            <User className="w-5 h-5 mr-3" />
            <span>Personal details</span>
          </button>
          <button className="w-full flex items-center text-left text-purple-400 hover:bg-gray-800 p-2 rounded-md">
            <span>Add more accounts</span>
          </button>
        </div>
      </div>

      {/* Accounts */}
      <div
        className="rounded-lg p-4 mb-6 shadow-md border"
        style={{ backgroundColor: "#111111", borderColor: "#bbacf2" }}
      >
        <button className="w-full flex justify-between hover:bg-gray-800 p-2 rounded-md">
          <div className="flex items-center">
            <User className="w-5 h-5 mr-3" />
            <div>
              <h3 className="font-medium text-left">Accounts</h3>
              <p className="text-sm text-gray-400 text-left">
                Review the accounts that you have in this Accounts center.
              </p>
            </div>
          </div>
        </button>
      </div>

      {/* How you use Hola */}
      <div className="rounded-lg p-4 shadow-md" style={{ backgroundColor: "#111111" }}>
        <h3 className="text-lg mb-4">How you use Hola</h3>
        <div className="space-y-1">
          <button className="w-full flex items-center py-3 hover:bg-gray-800 px-2 rounded-md">
            <Bookmark className="w-5 h-5 mr-3" />
            <span>Saved</span>
          </button>
          <button className="w-full flex items-center py-3 hover:bg-gray-800 px-2 rounded-md">
            <Clock className="w-5 h-5 mr-3" />
            <span>Archive</span>
          </button>
          <button className="w-full flex items-center py-3 hover:bg-gray-800 px-2 rounded-md">
            <Users className="w-5 h-5 mr-3" />
            <span>Close friends</span>
          </button>
          <button className="w-full flex items-center py-3 hover:bg-gray-800 px-2 rounded-md">
            <UserMinus className="w-5 h-5 mr-3" />
            <span>Blocked</span>
          </button>
          <button className="w-full flex items-center py-3 hover:bg-gray-800 px-2 rounded-md">
            <Lock className="w-5 h-5 mr-3" />
            <span>Account privacy</span>
          </button>
          <button className="w-full flex items-center py-3 hover:bg-gray-800 px-2 rounded-md">
            <Languages className="w-5 h-5 mr-3" />
            <span>Language</span>
          </button>
          <button className="w-full flex items-center py-3 hover:bg-gray-800 px-2 rounded-md">
            <HelpCircle className="w-5 h-5 mr-3" />
            <span>Help</span>
          </button>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 space-y-2 p-4 rounded-lg shadow-md" style={{ backgroundColor: "#111111" }}>
        <button className="w-full text-left text-[#bbacf2] font-medium py-2 hover:bg-gray-800 px-2 rounded-md">
          Add account
        </button>
        <button className="w-full text-left text-red-500 py-2 hover:bg-gray-800 px-2 rounded-md">
          Log out
        </button>
        <button className="w-full text-left text-red-500 py-2 hover:bg-gray-800 px-2 rounded-md">
          Log out all accounts
        </button>
      </div>
    </div>
  );
}

export default Settings;

















