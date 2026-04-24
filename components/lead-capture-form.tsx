"use client";

import { FormEvent, useEffect, useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  vehicleInterest: string;
  budget: string;
  timeline: string;
  contactPreference: string;
  tradeIn: string;
  notes: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  inquiryType: "source",
  vehicleInterest: "",
  budget: "",
  timeline: "",
  contactPreference: "email",
  tradeIn: "no",
  notes: "",
};

type LeadCaptureFormProps = {
  initialBudget?: string;
  initialContactPreference?: string;
  initialInquiryType?: string;
  initialTimeline?: string;
  initialVehicleInterest?: string;
};

function buildInitialState({
  initialBudget = "",
  initialContactPreference = "email",
  initialInquiryType = "source",
  initialTimeline = "",
  initialVehicleInterest = "",
}: LeadCaptureFormProps): FormState {
  const inquiryType =
    initialInquiryType === "inventory" || initialInquiryType === "consult"
      ? initialInquiryType
      : "source";
  const contactPreference =
    initialContactPreference === "call" || initialContactPreference === "text"
      ? initialContactPreference
      : "email";

  return {
    ...initialFormState,
    budget: initialBudget,
    contactPreference,
    inquiryType,
    timeline: initialTimeline,
    vehicleInterest: initialVehicleInterest,
  };
}

export function LeadCaptureForm(props: LeadCaptureFormProps) {
  const [formState, setFormState] = useState<FormState>(() => buildInitialState(props));
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setFormState(buildInitialState(props));
    setError("");
    setStatusMessage("");
    setIsSubmitted(false);
  }, [
    props.initialBudget,
    props.initialContactPreference,
    props.initialInquiryType,
    props.initialTimeline,
    props.initialVehicleInterest,
  ]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formState.fullName || !formState.email || !formState.vehicleInterest) {
      setError("Add your name, email, and the vehicle you want us to help with.");
      setStatusMessage("");
      setIsSubmitted(false);
      return;
    }

    if (formState.contactPreference !== "email" && !formState.phone.trim()) {
      setError("Add a phone number if you prefer a call or text follow-up.");
      setStatusMessage("");
      setIsSubmitted(false);
      return;
    }

    setError("");
    setIsSubmitted(true);
    setStatusMessage(
      "Request captured on this device. Connect this form to your CRM, email handler, or API route to receive live submissions.",
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="lead-form-heading">
        <div>
          <p className="eyebrow">Lead Intake</p>
          <h3>Tell us the right chassis, budget, and pace.</h3>
        </div>
        <p className="lead-form-intro">
          Use this for sourcing requests, inventory questions, or a fast first pass on
          the spec you want.
        </p>
      </div>

      <fieldset className="lead-choice-group">
        <legend>What do you need?</legend>
        <div className="lead-pill-row" role="radiogroup" aria-label="Inquiry type">
          <label className="lead-pill">
            <input
              checked={formState.inquiryType === "source"}
              name="inquiryType"
              onChange={() => updateField("inquiryType", "source")}
              type="radio"
            />
            <span>Source a vehicle</span>
          </label>
          <label className="lead-pill">
            <input
              checked={formState.inquiryType === "inventory"}
              name="inquiryType"
              onChange={() => updateField("inquiryType", "inventory")}
              type="radio"
            />
            <span>Ask about inventory</span>
          </label>
          <label className="lead-pill">
            <input
              checked={formState.inquiryType === "consult"}
              name="inquiryType"
              onChange={() => updateField("inquiryType", "consult")}
              type="radio"
            />
            <span>General consultation</span>
          </label>
        </div>
      </fieldset>

      <div className="lead-form-grid">
        <label className="lead-field">
          <span>Full name *</span>
          <input
            autoComplete="name"
            name="fullName"
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Your name"
            type="text"
            value={formState.fullName}
          />
        </label>

        <label className="lead-field">
          <span>Email *</span>
          <input
            autoComplete="email"
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
            type="email"
            value={formState.email}
          />
        </label>

        <label className="lead-field">
          <span>Phone</span>
          <input
            autoComplete="tel"
            name="phone"
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="(281) 555-0123"
            type="tel"
            value={formState.phone}
          />
        </label>

        <label className="lead-field">
          <span>Vehicle interest *</span>
          <input
            name="vehicleInterest"
            onChange={(event) => updateField("vehicleInterest", event.target.value)}
            placeholder="R34 GT-T, E46 M3, Defender 90..."
            type="text"
            value={formState.vehicleInterest}
          />
        </label>

        <label className="lead-field">
          <span>Budget range</span>
          <select
            name="budget"
            onChange={(event) => updateField("budget", event.target.value)}
            value={formState.budget}
          >
            <option value="">Select a range</option>
            <option value="under-25k">Under $25k</option>
            <option value="25k-40k">$25k - $40k</option>
            <option value="40k-60k">$40k - $60k</option>
            <option value="60k-90k">$60k - $90k</option>
            <option value="90k-plus">$90k+</option>
          </select>
        </label>

        <label className="lead-field">
          <span>Timeline</span>
          <select
            name="timeline"
            onChange={(event) => updateField("timeline", event.target.value)}
            value={formState.timeline}
          >
            <option value="">Select timing</option>
            <option value="asap">Ready now</option>
            <option value="30-days">Within 30 days</option>
            <option value="90-days">Within 90 days</option>
            <option value="researching">Researching options</option>
          </select>
        </label>
      </div>

      <div className="lead-form-grid lead-form-grid-compact">
        <fieldset className="lead-choice-group">
          <legend>Preferred follow-up</legend>
          <div className="lead-pill-row lead-pill-row-compact">
            <label className="lead-pill">
              <input
                checked={formState.contactPreference === "email"}
                name="contactPreference"
                onChange={() => updateField("contactPreference", "email")}
                type="radio"
              />
              <span>Email</span>
            </label>
            <label className="lead-pill">
              <input
                checked={formState.contactPreference === "call"}
                name="contactPreference"
                onChange={() => updateField("contactPreference", "call")}
                type="radio"
              />
              <span>Call</span>
            </label>
            <label className="lead-pill">
              <input
                checked={formState.contactPreference === "text"}
                name="contactPreference"
                onChange={() => updateField("contactPreference", "text")}
                type="radio"
              />
              <span>Text</span>
            </label>
          </div>
        </fieldset>

        <fieldset className="lead-choice-group">
          <legend>Do you have a trade-in?</legend>
          <div className="lead-pill-row lead-pill-row-compact">
            <label className="lead-pill">
              <input
                checked={formState.tradeIn === "no"}
                name="tradeIn"
                onChange={() => updateField("tradeIn", "no")}
                type="radio"
              />
              <span>No trade-in</span>
            </label>
            <label className="lead-pill">
              <input
                checked={formState.tradeIn === "yes"}
                name="tradeIn"
                onChange={() => updateField("tradeIn", "yes")}
                type="radio"
              />
              <span>Yes, I do</span>
            </label>
          </div>
        </fieldset>
      </div>

      <label className="lead-field">
        <span>Notes</span>
        <textarea
          name="notes"
          onChange={(event) => updateField("notes", event.target.value)}
          placeholder="Share trim preferences, transmission, mileage ceiling, color, or where you are in the buying process."
          rows={6}
          value={formState.notes}
        />
      </label>

      <input
        aria-hidden="true"
        autoComplete="off"
        className="lead-honeypot"
        name="company"
        tabIndex={-1}
        type="text"
      />

      <div className="lead-form-footer">
        <div className="lead-form-feedback" aria-live="polite">
          {error ? <p className="lead-form-error">{error}</p> : null}
          {!error && statusMessage ? (
            <p className="lead-form-success">{statusMessage}</p>
          ) : null}
          {!error && !statusMessage ? (
            <p className="lead-form-note">
              Static placeholder submission only. No data is sent until a backend route
              or form service is connected.
            </p>
          ) : null}
        </div>

        <button className="button button-primary" type="submit">
          {isSubmitted ? "Captured Locally" : "Submit Request"}
        </button>
      </div>
    </form>
  );
}
