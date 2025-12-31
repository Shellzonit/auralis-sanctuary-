"use client";
import React from "react";

              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()} className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-cyan-300 hover:to-purple-400 transition-all duration-200 border border-cyan-300/60">Post</button>
          </form>
        </>
      )}
      <div className="absolute inset-0 pointer-events-none z-0" />
    </div>
  );
}