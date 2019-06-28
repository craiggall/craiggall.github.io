/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

var EXAMPLE_NOTES = JSON.stringify([
{"CustomerPortal":{"PortalListItems":[{"PortalId":2967,"PortalTitle":"Craig Test","OrgUnitId":0,"DateModified":"2019-06-06T15:03:45","MaskedOrgUnitId":0,"OrgUnitGuidance":"","OrgUnitGuidanceType":0}],"Error":{"Message":""}},"Dictionary":{"DictionaryItems":[{"DictionaryId":1177399,"ParentDictionaryItemId":null,"DictionaryText":"Nearmiss","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177400,"ParentDictionaryItemId":null,"DictionaryText":"Incident - Insignificant","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177404,"ParentDictionaryItemId":null,"DictionaryText":"Incident - Minor","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177405,"ParentDictionaryItemId":null,"DictionaryText":"Incident - Moderate","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177406,"ParentDictionaryItemId":null,"DictionaryText":"Incident - Major","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177407,"ParentDictionaryItemId":null,"DictionaryText":"Accident - Insignificant","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177408,"ParentDictionaryItemId":null,"DictionaryText":"Accident - Minor","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177409,"ParentDictionaryItemId":null,"DictionaryText":"Accident - Moderate","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177410,"ParentDictionaryItemId":null,"DictionaryText":"Accident - Major","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177414,"ParentDictionaryItemId":null,"DictionaryText":"Environment - Insignificant","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177415,"ParentDictionaryItemId":null,"DictionaryText":"Environment - Minor","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177416,"ParentDictionaryItemId":null,"DictionaryText":"Environment - Moderate","OrderIndex":0,"OrgUnitIds":[]},{"DictionaryId":1177423,"ParentDictionaryItemId":null,"DictionaryText":"Environment - Major","OrderIndex":0,"OrgUnitIds":[]}],"Error":{"Message":""}},"OrgUnitList":{"OrgUnits":[{"OrgUnitId":257330,"Name":"Root Org","ParentId":0},{"OrgUnitId":257332,"Name":"SubOrg1","ParentId":257330},{"OrgUnitId":257333,"Name":"suborg2","ParentId":257330},{"OrgUnitId":257334,"Name":"suborg3","ParentId":257330},{"OrgUnitId":257335,"Name":"subOrg4 really really really really really really really really long name","ParentId":257330},{"OrgUnitId":257336,"Name":"subOrg1A","ParentId":257332},{"OrgUnitId":257337,"Name":"suborg1B","ParentId":257332},{"OrgUnitId":257338,"Name":"suborg4A","ParentId":257335},{"OrgUnitId":257339,"Name":"suborg4B","ParentId":257335},{"OrgUnitId":257340,"Name":"suborg4C","ParentId":257335},{"OrgUnitId":257341,"Name":"suborg4D","ParentId":257335}],"Error":{"Message":""}},"PortalTemplate":{"PortalTemplates":[{"TemplateId":6957,"TemplateName":"Report a Hazard","DateModified":"2019-06-06T15:03:45"},{"TemplateId":6958,"TemplateName":"Report an Incident","DateModified":"2019-06-06T15:03:45"},{"TemplateId":6959,"TemplateName":"Report a Vehicle Incident","DateModified":"2019-06-06T15:03:45"},{"TemplateId":7964,"TemplateName":"Risk Test","DateModified":"2019-06-06T15:03:45"},{"TemplateId":7965,"TemplateName":"testing","DateModified":"2019-06-06T15:03:45"},{"TemplateId":7966,"TemplateName":"Another test","DateModified":"2019-06-06T15:03:45"},{"TemplateId":6960,"TemplateName":"Complete a DSE Assessment","DateModified":"2019-06-06T15:07:32"}],"Error":{"Message":""}},"Template":{"DateModified":"0001-01-01T00:00:00","TemplateItem":{"MapId":6957,"MapName":"Report a Hazard","OrgUnitFixed":false,"IsAnonymous":true,"DefaultOrgUnitId":257330,"ForceOrgUnitSelection":false,"IsOrgUnitHidden":false,"HasAttachments":true,"MaxUploads":5,"UploadGuidance":null,"AllowActions":false,"Sections":[{"OrderIndex":0,"HeaderText":"Details","Fields":[{"MapLineId":110600,"PropertyName":"HazardDate","DisplayText":"Date Hazard Spotted","Guidance":null,"TypeOfDisplay":1,"IsMandatory":true,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":1,"MaxLength":0,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110601,"PropertyName":"HazardTime","DisplayText":"Time Hazard Spotted","Guidance":null,"TypeOfDisplay":1,"IsMandatory":true,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":10,"MaxLength":5,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110602,"PropertyName":"Location","DisplayText":"Location","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":3,"MaxLength":500,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110603,"PropertyName":"HazardDetails","DisplayText":"Hazard Details","Guidance":null,"TypeOfDisplay":1,"IsMandatory":true,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":3,"MaxLength":100000,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110604,"PropertyName":"HazardStillPresent","DisplayText":"Is The Hazard Still Present?","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":5,"MaxLength":0,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110605,"PropertyName":"PotentialToCauseInjury","DisplayText":"Is/Was There Potential To Cause Injury?","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":5,"MaxLength":0,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110606,"PropertyName":"PotentialDamageEquipment","DisplayText":"Is/Was There Potential To Cause Damage To Equipment?","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":5,"MaxLength":0,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110607,"PropertyName":"PotentialDamageProperty","DisplayText":"Is/Was There Potential To Cause Damage To Property?","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":5,"MaxLength":0,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110608,"PropertyName":"TypeOfHazard","DisplayText":"Type Of Hazard","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":7,"MaxLength":0,"MatrixId":0,"DictionaryKey":"TypeOfHazard","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110609,"PropertyName":"OtherTypeOfHazard","DisplayText":"Other Type Of Hazard","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":2,"MaxLength":100,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110610,"PropertyName":"ReportedBy","DisplayText":"Reported By","Guidance":null,"TypeOfDisplay":1,"IsMandatory":true,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":2,"MaxLength":60,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110611,"PropertyName":"DateReported","DisplayText":"Reported By Date","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":1,"MaxLength":0,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"}]},{"OrderIndex":0,"HeaderText":"Conclusion","Fields":[{"MapLineId":110612,"PropertyName":"Comments","DisplayText":"Comments","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":3,"MaxLength":100000,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110613,"PropertyName":"ResolutionRequired","DisplayText":"Resolution Required?","Guidance":"Please ensure this is ticked if completing resolution information below.","TypeOfDisplay":2,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":"true","IsHiddenByDefault":false,"OrderIndex":0,"FieldType":5,"MaxLength":0,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110614,"PropertyName":"Resolved","DisplayText":"Resolved?","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":5,"MaxLength":0,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110615,"PropertyName":"DateResolved","DisplayText":"Date Resolved","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":1,"MaxLength":0,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"},{"MapLineId":110616,"PropertyName":"StepsToResolve","DisplayText":"Steps Taken To Resolve","Guidance":null,"TypeOfDisplay":1,"IsMandatory":false,"IsDirectInput":true,"DefaultValue":null,"IsHiddenByDefault":false,"OrderIndex":0,"FieldType":3,"MaxLength":100000,"MatrixId":0,"DictionaryKey":"","ParentDictionaryKey":null,"ChildDictionaryKeys":[],"EnumItems":[],"DateFormatString":"dd/MM/yyyy"}]}],"SubModules":[],"QuestionSets":[],"DateCreated":"2018-10-29T13:16:58","DateModified":"2019-06-06T15:03:45","LanguageId":2057,"ModuleName":"HazardSpotting","IsHumanResources":false,"IsOverrideHumanResources":false,"IsForHumanResourcesUser":false,"IsConfidentialityEnabled":false,"IsPhoneNoMandatory":false,"ShowAdditionalEmails":false,"OrgUnitCaption":"Department"},"TemplateName":null,"Error":{"Message":""}},"profile":{"name":"Test mep"}}
]);

function value(val) {
  var text = document.getElementById("text");
  if (val) {
    text.value = val;
  } else {
    return text.value;
  }
}

function updateStatus(val) {
  document.getElementById("status").innerHTML = "<b>Status:</b> " + val;
}

var Buttons = {
  load: function () {
    var start = performance.now();
    NotesStorage.load().then(function (notes) {
      if (notes) {
        value(notes);
        updateStatus("loaded.");
      } else {
        updateStatus("No saved items found!");
      }
      var end = performance.now();

      document.getElementById("timings").innerHTML = "<b>Load Time:</b> " + (end - start) + " ms";
    }, updateStatus);
  },

  save: function () {
    var start = performance.now();
    var notes = value();

    NotesStorage.save(notes).then(function () {
      updateStatus("Saved.");
      var end = performance.now();
      document.getElementById("timings").innerHTML = "<b>Save Time:</b> " + (end - start) + " ms";
    });
  },

  paste: function () {
    value(EXAMPLE_NOTES);
    updateStatus("Example notes pasted.");
  },

  clear: function () {
    localforage.clear();
    Buttons.paste();
    updateStatus("Examples pasted. (Storage cleared.)");
  }
};

addEventListener("DOMContentLoaded", function () {
  NotesStorage.load().then(function (notes) {
    if (notes) {
      value(notes);
      updateStatus("Notes loaded.");
    } else {
      Buttons.paste();
      updateStatus("Examples pasted. (No saved items found.)");
    }
  }, updateStatus);
});

addEventListener("click", function (event) {
  switch (event.target.id) {
    case "load":
      Buttons.load();
      break;
    case "save":
      Buttons.save();
      break;
    case "paste":
      Buttons.paste();
      break;
    case "clear":
      Buttons.clear();
      break;
  }
});
