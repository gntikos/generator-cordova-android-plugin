package <%= packageName %>;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

public class <%= serviceName %> extends CordovaPlugin {
    @Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if (action.equals("sampleAction")) {
            this.sampleInnerMethod();
            return true;
        }
        return false;
	}
	
	private void sampleInnerMethod() {
        return;
	}
}